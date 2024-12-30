import { setCookie, getCookie } from 'cookies-next';

export const login = async (id, pw) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            password: pw
        }),
    });
    const result = await response.json();
    
    if(result.message === "login_success") {
        const option = {
            maxAge: 3600 * 24 * 14 //14일
        }
        setCookie('id', id, option);
        return true;
    }
    else {
        alert(result.message)
        return false;
    }
};

export const getUserName = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${id}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        //이름
        return result.data.name;
    }
    else {
        alert(result.message)
        return false;
    }
}

export const signup = async (name, id, pw) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            id: id,
            password: pw
        }),
    });
    const result = await response.json();
    if(result.message === "create_success") {
        alert("회원가입 성공! 로그인 후 서비스를 이용하세요!");
        return true;
    }
    else {
        alert(result.message)
        return false;
    }
}

export const createCourse = async (name) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subject`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "subjectName": name
        }),
    });
    const result = await response.json();
    
    if(result.message === "create_success") {
        return result.data;
    }
    else {
        alert(result.message)
        return false;
    }
}

export const getCourses = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subject`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        return result.data;
    }
    else {
        alert(result.message);
        return false;
    }
}
export const getCourse = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subject/${id}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        return result.data;
    }
    else {
        alert(result.message);
        return false;
    }
}

export const deleteCourse = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subject/${id}`, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "delete_success") {
        return true;
    }
    else {
        alert(result.message)
        return false;
    }
}

export const createTest = async (course_name, test_name, start_time, end_time, date, OCR) => {
    const startTime = new Date(date+' '+start_time);
    const endTime = new Date(date+' '+end_time);
    console.log(startTime)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exam`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "subject": course_name,
            "examName": test_name,
            "startTime": startTime,
            "endTime": endTime,
            "OCR": OCR
          }),
    });
    const result = await response.json();
    
    if(result.message === "create_success") {
        return result.data;
    }
    else {
        alert(result.message)
        return false;
    }
}

export const getTests = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exam`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        return result.data;
    }
    else {
        alert(result.message);
        return false;
    }
}

export const getTest = async (name) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exam/${name}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        return result.data;
    }
    else {
        alert(result.message);
        return false;
    }
}

export const getCount = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/result`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    });
    const result = await response.json();
    
    if(result.message === "inquiry_success") {
        return result.data.map((v) => {
            return v.result.totalScore;
        })
    }
    else {
        alert(result.message);
        return false;
    }
}



