import './Footer.scss';
import logo from '@images/logos/n4c/n4c-logo.svg';
import FooterColumn from '../FooterColumn/FooterColumn';

export default function Footer() {
  // Specify icons with path relative to iconContext
  const columnData = [
    {
      title: 'More Info',
      links: [
        {
          text: 'Sign Up',
          icon: '',
          destination: 'https://forms.gle/YXM4umCJZDUCxN1eA',
        },
      ],
    },
    {
      title: 'Events',
      links: [
        {
          text: 'SkillsUSA',
          icon: '',
          destination: 'https://www.skillsusa.org',
        },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          text: 'computerclub@northampton.edu',
          icon: './email.svg',
          destination: 'mailto:computerclub@northampton.edu',
        },
        {
          text: 'Discord',
          icon: './discord.svg',
          destination: 'https://discord.com/invite/jE6mgUG2sq',
        },
        {
          text: 'Instagram',
          icon: './instagram.svg',
          destination: 'https://www.instagram.com/ncc_computerclub/',
        }
      ],
    },
  ];

  const columns = columnData.map((data) => (
    <FooterColumn
      key={data.title}
      title={data.title}
      links={data.links}
    />
  ));

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-space">
          <div className="logo-space-logo d-inline-flex align-items-center">
            <img src={logo} className="rounded-circle" />
            <h1 className="m-0">N4C</h1>
          </div>

          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>

            <p>
              3835 Green Pond Rd,
              <br />
              Bethlehem, PA 18020
              <br />
              Founders Hall 118
              <br />
            </p>
          </div>
        </div>

        <div className="footer-columns">{columns}</div>
      </div>

      <div className="footer-bottom">
        <p>Copyright Northampton Community College ©2010-2026.</p>
        <a href='*'>Terms</a>
      </div>
    </footer>
  );
}