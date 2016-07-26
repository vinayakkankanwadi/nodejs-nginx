# nodejs-nginx
## Simple example where twp node.js server's are running behind nginx 

#### Step 1: Install nginx
###### --> sudo apt-get install -y nginx

#### Step 2: Install node
###### --> sudo apt-get install -y node 

#### Step 3: Create Node.js server and run as
###### --> node server.js

#### Step 4: Update nginx file to include nodejs servers
###### --> sudo vi /etc/nginx/sites-available/default

#### Step 5: Restart nginx
###### --> sudo service nginx reload

#### Step 6: Access the nginx server
###### --> curl localhost

####Step 7: Node server are requested alternatively
