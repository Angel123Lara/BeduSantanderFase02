const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  const {links:{social:{facebook: fb,instagram:ins},},}=person
  console.log(fb,ins)