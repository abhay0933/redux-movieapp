// import axios from "axios";
import axios from "axios";

export const fetchData = async (url,params) => {
    try {
        
        const res = await axios.get("https://api.themoviedb.org/3"+url, {
            params, 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTY2YjE1ODg1MzIyYThkMTA3NzlkZWE0MmIyY2QyZCIsInN1YiI6IjY1YmE0Yjg3OTBmY2EzMDE2MjA3NzU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._dWVpKFK2Z8xf-cavutPEFLg7jIgvXUgs2H7V4aDjDQ",
            },
        });
        return res.data;

    } catch (error) {
        return error;
    }
};