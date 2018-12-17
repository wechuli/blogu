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
    -Blogs listed as 'private' or 'draft' can only be accessed by their authors
    -Profiles listed as 'private' can only be viewed and edited by the owners
    -Anonymous users should be allowed to view blog content labelled as 'public' by the authors, but they cannot add comments to        the blogs
    -Anonymous users should be able to view the details of bloggers who have labelled their profiles as public
    -Anonymous users cannot view any blogs or any users labelled 'restricted'
    -Include text analytics from Microsoft Cognitive Services to automatically detect the language of the blog post and Identify the key words and phrases the blog is taking about
    
Routes
    -


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

  
 
