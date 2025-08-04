document.addEventListener('DOMContentLoaded', function() {
  const applicationsCard = document.querySelector('.admin-card:nth-child(2)');
  const popup = document.getElementById('applications-popup');
  const closeBtn = document.getElementById('close-popup');

  applicationsCard.addEventListener('click', function() {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});

//APPLICATIONS
document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/applications')
    .then(res => res.json())
    .then(applications => {
      const tableBody = document.querySelector('#applicationsTable tbody');

      applications.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${app.fname || ''}</td>
          <td>${app.lname || ''}</td>
          <td>${app.oname || ''}</td>
          <td>${app.dob || ''}</td>
          <td>${app.gender || ''}</td>
          <td>${app.tel1 || ''}</td>
          <td>${app.tel2 || ''}</td>
          <td>${app.location || ''}</td>
          <td>${app.grade || ''}</td>
          <td>${app.email || ''}</td>
          <td>${app.instrument || ''}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading applications:', error);
    });
});

