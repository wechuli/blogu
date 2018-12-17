# blogu
This is a blog API to implement simple funtionality of a basic blog
Technology Stack
    -NodeJs/Express
    -Azure CosmosDB(Mongo API)
    -React front-end(later)

Functionality
    -Users should be able to sign up
    -Only Signed in users are allowed to author blogs and edit only blogs they have authored
    -Signed in users can also view blogs labelled as 'public' or 'restricted'
    -Signed in users can view bloggers listed as 'public' or 'restricted' in their profiles
    -Only owners of respective blogs can delete the blog
    -Blogs listed as 'private' or 'draft' can only be accessed by their authors
    -Profiles listed as 'private' can only be viewed and edited by the owners
    -Anonymous users should be allowed to view blog content labelled as 'public' by the authors, but they cannot add comments to        the blogs
    -Only comment writers can delete them
    -Anonymous users should be able to view the details of bloggers who have labelled their profiles as public
    -Anonymous users cannot view any blogs or any users labelled 'restricted'
    -Include text analytics from Microsoft Cognitive Services to automatically detect the language of the blog post and Identify the key words and phrases the blog is taking about
    
Routes
    Users
        -POST  users/user   - create a new user
        -GET   users/   - return all users who have listed their profiles as 'public' or 'restricted'
        -GET users/public    -return all users who have listed their profiles as 'public' ( used by anonymous users)
        -PUT users/user/:userId  -Edit all details of a user
        -PATCH users/user/:userId -Edit specicif details of a user

    Blog
        -GET /blogs/public    - get all blogs listed as 'public' for users not logged in
        -GET /blogs/  - get all blogs, both 'public' and 'resticted' for logged in users
        -POST /blogs/create   - create blog
        -PUT /blogs/edit/:blogId     - edit the whole blog
        -PATCH /blogs/edit/:blogId  - edit only a part of a blog
        -DELETE /blogs/delete/:blogId - delete a blog
    Comment
        -GET /blogs/blog/:blogId/comments   - Get all comments for a particular blog id
        -POST /blogs/blog/:blogId/comment   - Post a comment on a blog
        -GET /blogs/blog/:commentId  - Get a particular 
        -DELETE  /blogs/blog/:commentId - Delete a particular comment


Models
    -Users
    -Blog
    -Comment
  
Things to Use 
    -passport
    -passport-jwt
    -passport-local
    -joi validation
    -jsonwebtokens


Additional Functionality(For Future Implementation)
-React front-end
-React Native mobile applications
-Functionality to enable upload of profile pictures and pictures for the particular blog- use with Azure Blob Storage or Amazon S3

  
 
