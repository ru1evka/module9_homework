//Создаю экземпляр DOMParser, для того чтобы парсить xml документ  
const parset = new DOMParser();

// Расписываю xml документ, который буду парсить 
const xmlDocument = `
<list>
    <student>
        <name lang = "en">
            <fist>Ivan</fist>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <nameru lang = "ru">
            <fistru>Петр</fistru>
            <secondru>Петров</secondru>
        </nameru>
        <ageru>58</ageru>
        <profru>driver</profru>   
    </student>
</list>
`;

// присваиваю все теги xml документа к ListNode
const xmlDOM = parset.parseFromString(xmlDocument, "text/xml");

const listNote = xmlDOM.querySelector("list");
const studentNote = listNote.querySelector("student");
const nameNote = listNote.querySelector("name");
const fistNote = listNote.querySelector("fist");
const secondNote = listNote.querySelector("second");
const ageNote = listNote.querySelector("age");
const profNote = listNote.querySelector("prof");
const nameruNote = listNote.querySelector("nameru");
const fistruNote = listNote.querySelector("fistru");
const secondruNote = listNote.querySelector("secondru");
const ageruNote = listNote.querySelector("ageru");
const profruNote = listNote.querySelector("profru");

const langAttr = nameNote.getAttribute('lang');
const langruAttr = nameruNote.getAttribute('lang');

//Записываю все переменные в результат
const resultEn = {
    Name: fistNote.textContent,
    Surename: secondNote.textContent,
    Lang: langAttr,
    Age: Number(ageNote.textContent),
    Prof: profNote.textContent,
};

const resultRu = {
    Name: fistruNote.textContent,
    Surename: secondruNote.textContent,
    Lang: langruAttr,
    Age: Number(ageruNote.textContent),
    Prof: profruNote.textContent,
};

//Вывожу обьект xml докумета
console.log('resultEn', resultEn);
console.log('resultRu', resultRu);



