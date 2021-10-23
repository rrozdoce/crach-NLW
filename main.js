const linksSocialMedia = {
    //mudar links
    github: "rrozdoce",
    youtube: "", 
    facebook: "",
    instagram: "felipevilhalva",
    twitter: "DARK1933"
  };

  //camelCase
  //PascalCase
  //snake_case

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute("class");

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
  }
  changeSocialMediaLinks();

function getGitHubProfileInfos(params) {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;
    
    fetch(url)
    .then(response => response.json()) //promessa
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login //nao ta funcionandooo
    })
    
}

  getGitHubProfileInfos();