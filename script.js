// Attendance records
let attendanceRecords = [];

// Facial Recognition Check-in (Placeholder)
function facialRecognition() {
    alert("Facial Recognition system will be integrated using TensorFlow.js.");
    // Placeholder for actual facial recognition implementation
}

// Mobile App Check-in (Placeholder)
function mobileAppCheckIn() {
    const studentName = prompt("Enter your name for mobile app check-in:");
    if (studentName) {
        const currentTime = new Date().toLocaleTimeString();
        attendanceRecords.push({ name: studentName, time: currentTime });
        updateAttendanceTable(studentName, currentTime);
    }
}

// Function to update the attendance table
function updateAttendanceTable(name, time) {
    const tableBody = document.querySelector("#attendanceTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${time}</td>`;
    tableBody.appendChild(newRow);
}

// Scheduling smart board usage
function scheduleResources() {
    const schedule = "Smart Board: Available from 2 PM to 4 PM today.";
    document.getElementById("resource-status").innerHTML = `<p>${schedule}</p>`;
}

// Viewing maintenance schedule
function viewMaintenance() {
    const maintenance = "Next classroom maintenance scheduled for 10th October, 2024.";
    document.getElementById("resource-status").innerHTML = `<p>${maintenance}</p>`;
}

// Integrating security systems
function integrateSecurity() {
    alert("Security system integration API will be added.");
    // Placeholder for API integration
}

// Sending emergency alerts
function sendEmergencyAlert() {
    alert("Emergency alert sent to all students and staff via SMS/notification.");
    // Placeholder for sending real-time emergency notifications
}

// Display on smart board (Placeholder)
function displayOnSmartBoard() {
    alert("Lesson plan displayed on smart board.");
    // Placeholder for smart board integration
}

// Collecting feedback from students
function collectFeedback() {
    const feedback = prompt("Enter your feedback for today's lesson:");
    if (feedback) {
        document.getElementById("feedback-data").innerHTML = `<p>Feedback received: ${feedback}</p>`;
    }
}
// Notes Upload Function
function uploadNotes() {
    const fileInput = document.getElementById('notesUpload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('notes-status').innerHTML = `Uploaded: ${file.name}`;
        };
        reader.readAsText(file);
    } else {
        document.getElementById('notes-status').innerHTML = 'No file selected.';
    }
}

// Sample Data for Attendance
const attendanceData = [
    { name: 'John Doe', checkinTime: '9:00 AM' },
    { name: 'Jane Smith', checkinTime: '9:05 AM' },
    { name: 'Michael Brown', checkinTime: '9:15 AM' }
];

// Generate Student Reports
function generateStudentReports() {
    const totalStudents = 50; // Preset total number of students
    const presentStudents = attendanceData.length;
    const absentStudents = totalStudents - presentStudents;

    document.getElementById('totalPresent').innerText = presentStudents;
    document.getElementById('totalAbsent').innerText = absentStudents;

    // Populate attendance table
    const tbody = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear any existing rows
    attendanceData.forEach(student => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = student.name;
        cell2.innerHTML = student.checkinTime;
    });
}

// Chatbot Functionality
function sendQuery() {
    const chatbox = document.getElementById('chatbox');
    const userQuery = document.getElementById('chatInput').value;
    const botReply = document.createElement('p');
    
    botReply.innerHTML = `<strong>You:</strong> ${userQuery}`;
    chatbox.appendChild(botReply);
    
    // Basic bot response
    const botResponse = document.createElement('p');
    if (userQuery.toLowerCase().includes('schedule')) {
        botResponse.innerHTML = `<strong>Chatbot:</strong> You can view the class schedule on your dashboard.`;
    } else if (userQuery.toLowerCase().includes('report')) {
        botResponse.innerHTML = `<strong>Chatbot:</strong> Student reports can be generated in the Reports section.`;
    } else {
        botResponse.innerHTML = `<strong>Chatbot:</strong> I'm here to help! Please ask about schedules, reports, or general queries.`;
    }
    chatbox.appendChild(botResponse);
    document.getElementById('chatInput').value = ''; // Clear input after sending
}
