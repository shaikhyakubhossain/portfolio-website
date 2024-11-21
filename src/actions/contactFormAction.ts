"use server";
export default async function contactFormAction(formData: FormData): Promise<string> {
    const url = 'https://portfolio-website-backend-in-nodejs.vercel.app';
    // const url = 'http://localhost:4000';
    let result: string = ''

    const response = await fetch(`${url}/contactForm`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "code": `${process.env.ACCESS_CODE}`
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        }),
        cache: "no-cache"
       });
       const data = await response.json();
       console.log(data);
       if(data.error) result = data.error;
       else result = data.message;
       return result;
}