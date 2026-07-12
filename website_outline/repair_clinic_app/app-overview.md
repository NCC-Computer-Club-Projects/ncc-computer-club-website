# PC Repair Clinic App Outline

Outline the features of the PC Repair Clinic App.

## Overview

This app will be the primary medium for customers and volunteers to interact with the PC Repair Clinic. For customers, the app provides a way to explore the clinic's services, evaluate our members' abilities, and facilitate the submission of repair requests.

Club members and PC Repair Clinic volunteers will be able to log into the app using generated accounts. These member-specific accounts will be used to view and confirm repair requests. Members can also use the app to view their schedules.

## Accessing the App

Visitors can access the app via the navigation bar on the homepage. Clicking "PC Repair Clinic" will open the app in a new tab. Once there, a login page will appear asking whether the visitor is a PC Repair Clinic volunteer or a customer. The visitor must select an option to be directed to the appropriate page.

### Customer Page

If a visitor selects the "Customer" option, they will be immediately directed to the customer side of the app. Customers will then be greeted with the application's main page.

#### Making a Request

What questions should we ask users of our app? What should they consider when requesting a repair?

1. Do I know what my problem is?
 - **No**: We need to provide a way for customers to help us diagnose their problems
 - **Yes**: Provide an interface for submitting a repair request

2. When is the earliest date and time that I can expect my repair to be completed?

3. Will I be notified of my repair's progress?

4. Can I request a specific technician?

## Database Setup

We need a database to store the information submitted by users. What data will we collect?

### Data from Request Submissions

- Customer ID
- Name
- Contact information
  - Email
  - Phone number
- Student status (Is the customer a student?)
  - Student email 
  - Student ID
- Repair request
  - Device information
    - Device name
    - Model
    - Parts being inquired about
  - Full request message 
  - Dates
    - Request submission date
    - Estimated completion date
    - Requested completion date
  - Estimated cost of repair

### Member/Admin Page
