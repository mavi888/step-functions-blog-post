exports.handler = async (event) => {
    console.log('validate data function')
    console.log(event);

    if (event.Name && event.Mail && event.Work) {
      return {
        validated: true
      };
    } else {
      return {
        validated: false
      }
    } 
  }