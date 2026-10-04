#!/bin/bash
# Check line 34 for httpd.conf
# Check line 54 for ssl.conf
if [ "$EUID" != "0" ]
then
    echo "Run the script with sudo. Do: sudo ./redhat-setup"
    exit
fi

# Update packages and install Apache.

yum update -y # Install necessary package updates
yum install httpd -y # Install Apache
yum install mod_ssl -y # Install mod_ssl (strong cryptography module for Apache)
yum install firewalld -y # Install firewalld

# Set up firewalld (closes all ports by default)

systemctl start firewalld
systemctl enable firewalld
firewall-cmd --set-log-denied=all # Log all denied packets
firewall-cmd --permanent --add-service=ssh # Open port 22
firewall-cmd --permanent --add-service=https # Open port 443
firewall-cmd --reload # Reload the firewall to implement all new rules

# Set up Apache using sed

echo "Before running this, check the /etc/httpd/conf directory and see which file is present. Select the proper one."
echo "1. httpd.conf"
echo "2. ssl.conf"
read -r response
case $response in

    1)
        config_file_httpd="/etc/httpd/conf/httpd.conf"
        if [ -f "$config_file_httpd" ]; then
            sed -i '/#LoadModule ssl_module modules\/mod_ssl.so/a\LoadModule ssl_module modules/mod_ssl.so' "$config_file_httpd" # Insert LoadModule line
            sed -i '/<VirtualHost \*:443>/a\
            # INSERT SERVER NAME # # INSERT DOMAIN.com #\
            DocumentRoot /var/www/html\
            \n\
            SSLEngine on\
            SSLCertificate # INSERT PATH TO SSL CERTIFICATE #\
            SSLCertificateKeyFile # INSERT PATH TO SSL PRIVATE KEY #\
            SSLCertificateChainFile # INSERT SSL CERTIFICATE BUNDLE #\
            ' "$config_file_httpd"
            echo "Lines added to $config_file_httpd"
            systemctl restart httpd
        else
            echo "Error: $config_file_httpd does not exist"
        fi
        ;;

    2)
        config_file_ssl="/etc/httpd/conf/ssl.conf"
        if [ -f "$config_file_ssl" ]; then
            sed -i '/#LoadModule ssl_module modules\/mod_ssl.so/a\LoadModule ssl_module modules/mod_ssl.so' "$config_file_ssl" # Insert LoadModule line.
            sed -i '/<VirtualHost \*:443>/a\
            # INSERT SERVER NAME # # INSERT DOMAIN.com #\
            DocumentRoot /var/www/html\
            \n\
            SSLEngine on\
            SSLCertificate # INSERT PATH TO SSL CERTIFICATE #\
            SSLCertificateKeyFile # INSERT PATH TO SSL PRIVATE KEY #\
            SSLCertificateChainFile # INSERT SSL CERTIFICATE BUNDLE #\
            ' "$config_file_ssl"
            echo "Lines added to $config_file_ssl"
            systemctl restart httpd
        else
            echo "Error: $config_file_ssl does not exist"
        fi
        ;;

    *)
        echo "Invalid option"
        exit
        ;;

esac