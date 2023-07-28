function StudentList(){
    const students = ["Alia" , "Zahra" ,"Noor"]
    function CallStudent(std) {
        alert(std + " is here")
    }
return(
<>
<h1>Students List</h1>
<ul>
    {students.map((std) => (
    <li key={std}><label>{std}</label> <button onClick= {()=>CallStudent(std)}>Call {std}</button></li>

))}
</ul>
</>
);
};
export default StudentList;