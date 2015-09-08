# get-image-lightness

get-image-lightness exposes a function that returns the lightness of an image. This package processes a copy of the passed in image, so make sure that your image hosting provider is configured to allow cross-origin anonymous retrieval.

## Installation

`meteor add poetic:get-image-lightness`

## Usage

Local File:
```
get-image-lightness('images/example.jpg', function(brightness){
  console.log(brightness)
});
```

URL:
```
get-image-lightness('www.exampleimage.com/example', function(brightness){
  console.log(brightness)
});
```


