# PortalPlus
PortalPlus is a student powered remake of SDSU's student webportal.

#Dev setup
1. If you don't have an existing copy of PortalPlus you'll need to clone the repository locally
2. Pull the latest changes down `git pull [origin branch_name]`
3. Run `meteor npm install` to install the dependencies
4. Test everything is working properly by running `meteor`
5. If everything is good to go create and checkout a new branch for your feature/change `git checkout -b feature_name`
6. Make some changes
7. When you're done making changes add files you want to commit to the stage `git add [file_name or folder_name]` then commit them with a **USEFUL** message `commit -m "Fixed bug where button on main dialog wasn't appearing"`
8. Repeat step 7 until you feel like your additions are ready to be pushed up and reviewed
9. Actually push your changes using `git push origin feature_name` this will make your branch appear under branches on your remote (github)
10. Post a link in slack to the branch you just pushed up and go over your changes with at least one other person.
11. Submit a pull request via the branches interface on github.
12. This will trigger the final review process and if everything is good we will merge your branch into master
13. Once your feature is merged and you don't need to change or add anything of the same type you can delete the branch you made by running `git branch -D feature_name` this will delete the branch on the remote as well as locally which keeps the repository clean.
