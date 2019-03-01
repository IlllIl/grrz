import Student from "@/models/Student";

let Util = {
    getStudentAge(stud: Student){
        if (stud.bday) {
            let bday= JSON.parse(JSON.stringify(stud.bday));
            if( (typeof bday) === 'string'){
                bday=new Date(bday)
            }
            let diff_ms = Date.now() - bday.getTime();
            let age_dt = new Date(diff_ms);

            return Math.abs(age_dt.getUTCFullYear() - 1970);
        } else {
            return -1;
        }
    },


}
export default Util;