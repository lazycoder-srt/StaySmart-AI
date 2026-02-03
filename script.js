const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:IpMB1jR_/hostel";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("hostel-list");
    container.innerHTML = "";

    (data || []).forEach(hostel => {
      const div = document.createElement("div");

      div.className = "hostel-card";

      div.innerHTML = `
       <img src="${hostel.image_url}" class="hostel-img" alt="Hostel Image">

       <h3>${hostel.name}</h3>

       <p><strong>Rent:</strong> ₹${hostel.rent}</p>
       <p><strong>Distance:</strong> ${hostel.distance} km</p>
       <p><strong>City:</strong> ${hostel.city}</p>
       <p><strong>College:</strong> ${hostel.college}</p>
       <p><strong>Trust Score:</strong> ${hostel.trust_score}</p>

        <a href="details.html?id=${hostel.id}">
         <button class="view-btn">View Details</button>
        </a>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("hostel-list").innerText =
      "Failed to load hostels.";
  });
