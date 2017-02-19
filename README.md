### Exercise feedback

As I had a freedom to use a framework of my choice I've accomplished this exercise with Ionic 2 / Cordova. 

#### Building

Ionic 2 comes with very strong build system which means that you don't need to reinvent the wheel and use a third party build tool such `grunt.js` or `gulp.js`. Npm tasks are more than enough in my example.

##### Build
`npm run-script ionic:build` or just `ionic build`

##### Run
`npm run-script ionic:serve` or just `ionic serve`

#### Testing

I'm unconditional adept of agile and all kind of tests. In this exercise I don't provide any test because I estimated that it can take me more time that I have to spend for this exercise.
 
#### Issues

I was unable to send a put request, it means that review page is out of order. Your spec does not give enough of precision of how such put request must look like, I've tried 2 different options but it was unsuccessful in both cases.

##### Attempt 1

Url

`PUT http://52.31.91.48:5000/api/cakes/586fb8773fa54b26ca755cdb`

Body
```
{
  "id": "586fb8773fa54b26ca755cdb",
  "name": "Test cake the third",
  "comment": "Ultra fruity",
  "imageUrl": "http://img10.deviantart.net/c2a3/i/2015/165/0/2/small_ckae_by_mariosonicfan16-d8x8b0c.jpg",
  "yumFactor": 5
}
```

Response

`Internal State Error 500`

##### Attempt 2

Url

`PUT http://52.31.91.48:5000/api/cakes/586fb8773fa54b26ca755cdb`

Body
```
{
  "comment": "Ultra fruity"
}
```

Response

`Internal State Error 500`

#### Another tech exercises

I've successfully accomplished different kind of tech exercises, that can be found below:

- https://github.com/vba/Sigm-7-test
- https://github.com/vba/android-test
- https://github.com/vba/jpmorgan
- https://github.com/vba/fr.sleeping.barber

My tech blog is available [here](http://vba.github.io/).