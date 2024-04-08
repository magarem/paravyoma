export default defineEventHandler(async (event) => {

    console.log('event:', event);
      const req = await readBody(event)
      console.log('req:', req);
  
      const data = await $fetch('http://216.238.98.143:8001/lista/', {
        // mode: "no-cors",
        method: 'POST',
          headers: {
            "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': 'true',
            "Access-Control-Allow-Headers": '*',
            "Access-Control-Expose-Headers": '*'
          },
          body: req
      })
      
      
      // let data22 = await $fetch('http://localhost:3005/test?a=22')
      console.log("data22:", data);
  
      return data
  
  })