# Remove docs
rm -rf ./docs

# generate project
./node_modules/jsdoc/jsdoc.js -c .jsdoc.json -t ./node_modules/jsdoc-template/

# move statics files
cp -r ./static/* docs

# change project name in sidebar
sed -i 's/Braintree SDK Client Reference/JSDoc Generate/g' ./docs/*.html