when already have a clone:

> cd to directory 

> git status // see what changed

> git add filename.txt //called staging the changes
or git add . //to stage all the changes

> git commit -m "comment" //commit the changes

> git push //push to github

------------------------------------------------------
When using to create a pr 

> git status

> git checkout -b new-Branch-Name //git will say switching to a new branch 'name', even if made changes wthout to the file, run this command and git will transfer those changes over to newly created branch

> git commit -m "comment"

> git push -u origin newBranchName //sending upstream

> gh pr create //create a pull request
add name
body 
submit

------------------------------------------------------
can also use git stash //useful when need to clean your current branch b4 creating a new one

> git status

> git stash save "work on new feature (optional comment)"

> git checkout main

> git pull origin main //pull the latest from remote (good practice)

> git checkout -b newBranchName

> git stash pop //take changes from your stash and applies them to your newBranch

> git add .

> git commit -m "comment"

> git push -u origin newBranchName //push new branch to github

> gh pr create

------------------------------------------------------

If you did ammend mistake do this
> git reset --soft HEAD~1 //undo last commit but keep changes in staging area
which you can check using :
> git reflog //shows all the changes you made

then when you are sure head is at the right place you can do:
> git push --forece-with-lease origin branchName //force push to remote branch, this will reset the branch to the state of your local branch
// --force-with-lease is safer than --force as it checks if remote branch has been updated before force pushing

then just re commit and push again
> git commit -m "new comment"
------------------------------------------------------
