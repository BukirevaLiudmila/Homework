# markupLanguage
---
**markupLanguage** is a homework, which is necessary to create your own markup language using XML, DTD and XML Schema.

| File name         | Description                                  |
| ------------------|----------------------------------------------|
| dtdValidation.png | screenshot of the validation XML against DTD |
| filmography.dtd   | DTD schema language                          |
| filmography.xml   | created markup language                      |
| filmography.xsd   | XML Schema (XSD)                             |
| xsdValidation.png | screenshot of the validation XML against XSD |

#### Validation XML against DTD
To validate XML document against DTD is necessary to specify a reference to a DTD in the document type declaration:
```xml
<!DOCTYPE filmography SYSTEM "filmography.dtd">
```
*To validate **filmography.xml** against **filmography.dtd**, I used text editor TextMate (see **dtdValidation.png**).*

#### Validation XML against XSD
*To validate **filmography.xml** against **filmography.xsd**, I used [online validator](http://www.utilities-online.info/xsdvalidation/) (see **xsdValidation.png**).*
