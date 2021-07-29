import connection from "../database";

async function allSubjects(): Promise<{name: string, id: number}[]>{
    const subject = await connection.query(`SELECT * FROM subject`);
    return subject.rows;
}

export { allSubjects }