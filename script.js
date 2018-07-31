"use strict";

do{
	var nbr_user = window.prompt("Entrez une taille pour votre table de multiplication");
} while (isNaN(nbr_user))

document.write("<table>");
var cell_color;

for (var j = 1; j <= nbr_user; j++)
{
	document.write("<tr>");
	for (var i = 1; i <= nbr_user; i++)
	{
		if (i == j)
			document.write("<td class=\"colorpink\"><p class=\"multi\">" + j + 'x' + i);
		else if (i == 1 || j == 1)
			document.write("<td class=\"colorgrey\"><p class=\"multi\">" + j + 'x' + i);
		else
			document.write("<td><p class=\"multi\">" + j + 'x' + i);
		document.write("<p class=\"result\">" + j*i + "</p>")
		document.write("</p></td>");
	}
	document.write("</tr>");
}

document.write("</table>");