# RepoProvas 🎓
> Tests repository API!
## About 🔎
This is an API wich anyone with saves tests and send tests informations, filter by subject and professor name.
### Implemented features ✅
- [x] Create a new test
- [x] Send test list by subject
- [x] Send test list by professor
### Future improvements 🔮
- [ ] Implement Migrations
## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

## How to run
1. Clone this repository
2. Clone the [front-end repository](https://github.com/issitarual/repoprovas-front)
3. Follow instructions to run [front-end](https://github.com/issitarual/repoprovas-front)
4. Create a database using the ``dump.sql`` file inside the ``dump``
- 4.1 Open your terminal in the same path as the ``dump.sql`` file is located.
- 4.2 Access PostgreSQL
```bash
sudo su postgres
psql postgres
```
- 4.3 Create a database
```bash
CREATE DATABASE [database_name];
```
- 4.4 Then, quit psql and import the dump.sql file to your database
```bash
\q
psql [database_name] < dump.sql
```
- 4.5 Finally, you can connect your terminal on your database!
```bash
\c [database_name]
```
5. Install dependencies
```bash
npm i
```
6. Run the back-end with
```bash
npm start
```
