# markupLanguage

**markupLanguage** is a homework, in which necessary to create your own markup language using XML, DTD and XML Schema.

| File name         | Description                                  |
| ------------------|----------------------------------------------|
| dtdValidation.png | screenshot of the validation XML against DTD |
| filmography.dtd   | DTD schema language                          |
| filmography.xml   | created markup language                      |
| filmography.xsd   | XML Schema (XSD)                             |
| xsdValidation.png | screenshot of the validation XML against XSD |

### Validation XML against DTD
To validate XML document against DTD is necessary to specify a reference to a DTD in the document type declaration:
```xml
<!DOCTYPE filmography SYSTEM "filmography.dtd">
```
*To validate __filmography.xml__ against __filmography.dtd__, I used text editor TextMate (see __dtdValidation.png__).*

### Validation XML against XSD
*To validate __filmography.xml__ against __filmography.xsd__, I used [online validator](http://www.utilities-online.info/xsdvalidation/) (see __xsdValidation.png__).*
