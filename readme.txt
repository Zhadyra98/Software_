Microsoft Windows [Version 6.3.9600]
(c) Корпорация Майкрософт (Microsoft Corporation), 2013. Все права защищены.

C:\Users\user\Desktop\software>git init
Initialized empty Git repository in C:/Users/user/Desktop/software/.git/

C:\Users\user\Desktop\software>git remote add origin https://github.com/Zhadyra9
8/Software_.git

C:\Users\user\Desktop\software>git add .

C:\Users\user\Desktop\software>git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   Untitled-1.txt
        new file:   buttons.html
        new file:   cacl/calculator_2.html
        new file:   cacl/js.js
        new file:   cacl/reserve.js
        new file:   endka.html
        new file:   fixed.html
        new file:   lab_calculator.html
        new file:   laba.html
        new file:   labwork.html
        new file:   logo.png
        new file:   pyramid.html
        new file:   radiobutton.html
        new file:   table.html
        new file:   website/1.jpeg
        new file:   website/1920476.jpeg
        new file:   website/2.jpg
        new file:   website/3.jpg
        new file:   website/4.jpg
        new file:   website/5.jpg
        new file:   website/587cead45a37e38c7b10e39dce785562.jpeg
        new file:   website/Bazeen.jpg
        new file:   website/Bucharest.jpg
        new file:   website/Contactus.png
        new file:   website/Ice-Cream-Hdr.jpg
        new file:   website/akara.jpg
        new file:   website/brik.jpg
        new file:   website/cards.css
        new file:   website/contact.html
        new file:   website/home.html
        new file:   website/images.jpg
        new file:   website/menu.html
        new file:   website/menu.png
        new file:   website/new-york-hotdog.jpg
        new file:   website/new.jpeg
        new file:   website/pasta.jpg
        new file:   website/restaurant-256.png
        new file:   website/restaurant.jpg
        new file:   website/style.css
        new file:   website/sup-lapsha-s-kuricej.jpg
        new file:   website/vishnevij_sok.jpg


C:\Users\user\Desktop\software>git commit -m "first commit" -m "sd jfs"
[master (root-commit) 71e0e9e] first commit
 41 files changed, 2642 insertions(+)
 create mode 100644 Untitled-1.txt
 create mode 100644 buttons.html
 create mode 100644 cacl/calculator_2.html
 create mode 100644 cacl/js.js
 create mode 100644 cacl/reserve.js
 create mode 100644 endka.html
 create mode 100644 fixed.html
 create mode 100644 lab_calculator.html
 create mode 100644 laba.html
 create mode 100644 labwork.html
 create mode 100644 logo.png
 create mode 100644 pyramid.html
 create mode 100644 radiobutton.html
 create mode 100644 table.html
 create mode 100644 website/1.jpeg
 create mode 100644 website/1920476.jpeg
 create mode 100644 website/2.jpg
 create mode 100644 website/3.jpg
 create mode 100644 website/4.jpg
 create mode 100644 website/5.jpg
 create mode 100644 website/587cead45a37e38c7b10e39dce785562.jpeg
 create mode 100644 website/Bazeen.jpg
 create mode 100644 website/Bucharest.jpg
 create mode 100644 website/Contactus.png
 create mode 100644 website/Ice-Cream-Hdr.jpg
 create mode 100644 website/akara.jpg
 create mode 100644 website/brik.jpg
 create mode 100644 website/cards.css
 create mode 100644 website/contact.html
 create mode 100644 website/home.html
 create mode 100644 website/images.jpg
 create mode 100644 website/menu.html
 create mode 100644 website/menu.png
 create mode 100644 website/new-york-hotdog.jpg
 create mode 100644 website/new.jpeg
 create mode 100644 website/pasta.jpg
 create mode 100644 website/restaurant-256.png
 create mode 100644 website/restaurant.jpg
 create mode 100644 website/style.css
 create mode 100644 website/sup-lapsha-s-kuricej.jpg
 create mode 100644 website/vishnevij_sok.jpg

C:\Users\user\Desktop\software>git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


C:\Users\user\Desktop\software>git status
On branch master
nothing to commit, working tree clean

C:\Users\user\Desktop\software>git push --set-upstream origin master
fatal: AggregateException encountered.
   Произошла одна или несколько ошибок.
Username for 'https://github.com': Zhadyra98
Password for 'https://Zhadyra98@github.com':
Counting objects: 45, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (45/45), done.
Writing objects: 100% (45/45), 6.77 MiB | 255.00 KiB/s, done.
Total 45 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/Zhadyra98/Software_.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

C:\Users\user\Desktop\software>git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Untitled-1.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        readme.txt

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\user\Desktop\software>git add .

C:\Users\user\Desktop\software>git commit -m "second commit"
[master d82da76] second commit
 2 files changed, 7 insertions(+), 1 deletion(-)
 create mode 100644 readme.txt

C:\Users\user\Desktop\software>git push
fatal: AggregateException encountered.
   Произошла одна или несколько ошибок.
Username for 'https://github.com': Zhadyra98
Password for 'https://Zhadyra98@github.com':
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 349 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Zhadyra98/Software_.git
   71e0e9e..d82da76  master -> master

C:\Users\user\Desktop\software>