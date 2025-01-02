# Calendar_Application

## Overview  
The Communication Tracking Calendar Application is designed to help organizations maintain effective communication with companies by tracking past interactions and scheduling future engagements. This tool enables users to monitor the status of communications, plan follow-ups, and ensure consistent touchpoints with clients and partners.  

The application is built with a focus on usability, dynamic interactivity, and clear data visualization, providing a centralized platform for all communication tracking needs.  

---

## Features  

### **Admin Module**  
- **Company Management**:  
  - Add, edit, and delete company records.  
  - Each company includes:  
    - Name  
    - Location  
    - LinkedIn Profile URL  
    - Email addresses  
    - Phone numbers  
    - Comments or notes  
    - Communication periodicity (default follow-up interval).  

- **Communication Methods Management**:  
  - Define and configure communication methods.  
  - Specify details such as sequence, mandatory flags, and descriptions.  

---

### **User Module**  
- **Dashboard**:  
  - Displays companies in a grid format with the following columns:  
    - Company Name  
    - Last five communications with type and date.  
    - Next scheduled communication with type and date.  
  - Status Highlighting:  
    - **Red**: Overdue communications.  
    - **Yellow**: Communications due today.  
  - Tooltips for additional details when hovering over completed tasks.  

- **Calendar View**:  
  - Interactive monthly calendar showing scheduled and completed communications.  
  - Clicking a date opens a modal to log new communication tasks.  

- **Communication Logging**:  
  - Modal to log new communications dynamically, with fields for:  
    - Communication type.  
    - Date.  
    - Notes.  

- **Notifications**:  
  - Displays overdue and due communication tasks in a notification panel.  
  - Badge indicates the count of overdue and due tasks.  

---

### **Dynamic Actions**  
- Interactive status updates for overdue and due communications.  
- Dynamic calendar rendering for different months and years.  
- Live updates to the dashboard and notification panel based on user actions.  

---

## Technologies Used  

- **HTML5**: Structured and semantic content.  
- **CSS3**: Styling and responsive design.  
- **JavaScript (Vanilla)**: Application interactivity and dynamic functionality.  
- **Google Fonts (Inter)**: For improved typography and readability.  

---

## Setup Instructions  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/yourusername/communication-calendar.git  
   cd communication-calendar  
