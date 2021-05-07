<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <body style="background-color: pink; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1><xsl:value-of select="centres/h1"/></h1>
        <table style="border: 1px solid black; border-collapse: collapse; width: 100%;">
            <tr style="border: 1px solid black;">
                <th style="border: 1px solid black; padding: 10px;" >Name</th>
                <th style="border: 1px solid black;">Address</th>
                <th>Helpline No.</th>
            </tr>
            <xsl:for-each select="centres/centre">
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black; padding: 10px; text-align: center;" ><xsl:value-of select="name"/></td>
                    <td style="border: 1px solid black; text-align: center;"><xsl:value-of select="address"/></td>
                    <td style="text-align: center;"><xsl:value-of select="phone"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>	
