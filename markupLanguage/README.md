# markupLanguage

Own markup language (DTD and XML-schema)

| File name         | Description                                  |
| ------------------|----------------------------------------------|
| dtdValidation.png | screenshot of the validation XML against DTD |
| filmography.dtd   | DTD schema                                   |
| filmography.xml   | created markup language (example)            |
| filmography.xsd   | XML Schema (XSD)                             |
| xsdValidation.png | screenshot of the validation XML against XSD |

### Validation XML against DTD
To validate XML document against DTD is necessary to specify a reference to a DTD in the document type declaration:
```xml
<!DOCTYPE filmography SYSTEM "filmography.dtd">
```
*To validate __filmography.xml__ against __filmography.dtd__, I used text editor TextMate (see [dtdValidation.png](https://github.com/BukirevaLiudmila/Homework/blob/master/markupLanguage/dtdValidation.png)).*

### Validation XML against XSD
*To validate __filmography.xml__ against __filmography.xsd__, I used [online validator](http://www.utilities-online.info/xsdvalidation/) (see [xsdValidation.png](https://github.com/BukirevaLiudmila/Homework/blob/master/markupLanguage/xsdValidation.png)).*
