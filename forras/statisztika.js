var autoMarka = [];
autoMarka[2]="BMW;352";
autoMarka[3]="Ford;231";
autoMarka[4]="Volkswagen;196";
autoMarka[5]="Tesla;26";
autoMarka[6]="Saab;14";
autoMarka[7]="Dodge Viper;3";

function frissit(szam){
    mennyiseg.innerHTML=autoMarka[szam].split(';')[1];
    gyarto.innerHTML=autoMarka[szam].split(';')[0];
    let kepfajl='marka-'+szam+'.png';
}
