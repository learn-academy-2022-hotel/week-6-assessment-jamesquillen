# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

You can fix your mistake by adding a column to your Student model after the fact. I don't remember the exact syntax, but you would add a column to your Student model and call it "cohort_id". This foreign key will be in the Student model. The key's original source where it is the primary key is on the Cohort model and is the primary id for each cohort.

Researched answer:

I would use the original answer and add the syntax and steps to adding the additional column to the Student model:

We first need to generate a new migration by typing
`rails generate migration add_cohort_to_students`

Now we would go into the db/migrate folder in our rails file tree and find the migration we just generated. We would then add this line between the def and end lines of the migration file:
`add_column :students, :cohort_id, :integer`

We can then save the file and run `rails db: migrate` to update our schema. Now we can add cohort ids for each student so we know which cohort they belong to.


2. Which RESTful routes must always be passed params? Why?

Your answer:

- show: it has to have an id so it knows which item to dsplay
- edit: it must know which item it is being edited
- update: it must know which item to update
- delete: it must know which item to delete

Researched answer:

I believe the original answer is correct and I would not change it

3. Name three rails generator commands. What is created by each?

Your answer:

`rails generate model`: This command generates a model. After the word "model" the creator would list the columns and data types that would fill out the database table used for the model. Model generation is fairly simple as is only makes the model and table. Route creation would still need to be created separately for the model to be part of the RESTful application.

`rails generate resrouce`: This command generates a resource. In addition to doing everything a model generation does, it also takes cares of all of the routing needing for a RESTful application. It does a lot of work for the creator that would otherwise have to be done manually in separate steps.

`rails generate migration`: This command generates a migration file. The file can then be used to manually update table information for existing tables such as adding or removing columsn or indexes.

Researched answer:

I would stick with my answer but I could also use the "controller" and "rspec"

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- This will use the "index" controller method. The user would see all students with this method.

action: "POST" location: /students
- This will use the "create" controller method. The method would create a neew student record.

action: "GET" location: /students/new
- This will use the "new" controller method. The user would be able to see a form to enter information about a new student.

action: "GET" location: /students/2
- This will use the "show" controller method. The user would see only the student with the id of "2".

action: "GET" location: /students/2/edit
- This will use the "edit" controller method. The user would be able to see a form to edit information about student number 2.

action: "PATCH" location: /students/2
- This will use the "update" controller method. It would take the information inputted into the edit method and then update student number 2's data with the new information.

action: "DELETE" location: /students/2
- This will use the "destroy" controller method. This would delete student number 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. As a user, I want to see a homepage of all my tasks with due dates
    2. As a user, I want to be able to add a task with a due date, priority, and section for notes about the task
    3. As a user, I want to be able to edit each task
    4. As a user, I want to be able to delete a task
    5. As a user, I want to be able to check off a task when it is completed.
    6. As a user, I want the task color to turn green if checked or red if overdue.
    7. As a user, I want to be able to sort tasks by due date or priority.
    8. As a user, I want to be able to archive completed tasks to review them later.
    9. As a user, I want to be able to create a project with tasks underneath it.
    10. As a user, I want to be able to associate tasks that are related to the same project.