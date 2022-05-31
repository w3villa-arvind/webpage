function binddata(){
    fetch("https://reqres.in/api/users?page=2")
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then(data => {
        const html = data.data
          .map(user => {
            return `
            <div class="col-md-6 team-wrap">
              <div class="member-img col-6">
                <img src="${user.avatar}" alt="team member image" class="img-fluid">
              </div>
              <div class="member-detail col-6">
                <h3>${user.first_name} ${user.last_name}</h3>
                <h5>${user.email}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="text-primary">
                  <i class="fa fa-twitter"></i>
                  <span>@${user.first_name + user.last_name}</span>
                </p>
              </div>
            </div>
            `;
          })
          .join("");
        document
        .querySelector("#team-member-data")
        .insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => {
        console.log(error);
      });
  }

  binddata();