import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://jrppesgzrtbbqriuypku.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycHBlc2d6cnRiYnFyaXV5cGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMjYwMDksImV4cCI6MTk5NzYwMjAwOX0.mVBmQ2FuHX5r4vfrsllMAVZJrrIb3Bx-HjJWyz3HNCo");


export default function App(props: any) {
  
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("Note").select();
        console.log(data);
        
        setCountries(data);
    }
  
    return (
        <ul>
          {countries.map((country) => (
            <li key={country.title}>{country.title}</li>
          ))}
        </ul>
      );
}











// function App() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   async function getCountries() {
//     const { data } = await supabase.from("note").select();
//     setCountries(data);
//   }

//   return (
//     <ul>
//       {countries.map((country) => (
//         <li key={country.title}>{country.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;