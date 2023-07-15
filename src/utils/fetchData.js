export const exerciseOptions=  {
    method: 'GET',
    
    headers: {
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'d9cdd7c2d7msh035bd367a4ba1d7p1838b3jsneceee4b8e711'
    },


  };

  export const youtubeOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': 'd9cdd7c2d7msh035bd367a4ba1d7p1838b3jsneceee4b8e711',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
export const fetchData=async(url,options)=>
{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
};