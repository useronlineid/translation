document.getElementById('saveImage').addEventListener('click', function() {
    const HouseCodeNo = document.getElementById('HouseCodeNo').value || "-";
    const RegistrationOffice = document.getElementById('RegistrationOffice').value || "-";
    const Addresslist = document.getElementById('Addresslist').value || "-";
    const NameofHouse = document.getElementById('NameofHouse').value || "-";
    const NameofVillage = document.getElementById('NameofVillage').value || "-";
    const TypeofHouse = document.getElementById('TypeofHouse').value || "-";
    const DescriptionofHouse = document.getElementById('DescriptionofHouse').value || "-";
    const Housenumber = document.getElementById('Housenumber').value || "-";
    const Signed = document.getElementById('Signed').value || "-";
    const RegistrationPrinting = document.getElementById('RegistrationPrinting').value || "-";


    const BookNo = document.getElementById('BookNo').value || "-";
    const HouseCodeNo1 = document.getElementById('HouseCodeNo1').value || "-";
    const Name = document.getElementById('Name').value || "-";
    const Nationality = document.getElementById('Nationality').value || "-";
    const Sex = document.getElementById('Sex').value || "-";
    const Identification = document.getElementById('Identification').value || "-";
    const Status = document.getElementById('Status').value || "-";
    const Dateofbirth = document.getElementById('Dateofbirth').value || "-";
    const Mother = document.getElementById('Mother').value || "-";
    const Identification1 = document.getElementById('Identification1').value || "-";
    const Nationality1 = document.getElementById('Nationality1').value || "-";
    const Father = document.getElementById('Father').value || "-";
    const Identification2 = document.getElementById('Identification2').value || "-";
    const Nationality2 = document.getElementById('Nationality2').value || "-";
    const TransferredFrom = document.getElementById('TransferredFrom').value || "-";
    const Signed1 = document.getElementById('Signed1').value || "-";
    const certifiedcorrecttranslation = document.getElementById('certifiedcorrecttranslation').value || "-";
    
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/translation/blob/main/CM.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 85px; left: 275px; color:#252525; font-size: 12px; font-weight: bold;">
                House Particulars
                </p>     
                
                <p style="position: absolute; top: 85px; left: 500px; color:#252525; font-size: 12px; font-weight: bold;">
                Book No. 1
                </p>     
                <p style="position: absolute; top: 120px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;">
                House Code No.: ${HouseCodeNo}
                </p>   
                <p style="position: absolute; top: 120px; left: 260px; color:#252525; font-size: 12px; font-weight: bold;">
                Registration Office: ${RegistrationOffice}
                </p>   
                
                <p style="position: absolute; top: 160px; left: 70px; color:#252525; font-size: 12px; font-weight: bold;">
                Address list: <br>${Addresslist}
                </p>   
                
                <p style="position: absolute; top: 220px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;">
                Name of Village: ${NameofVillage}
                </p>   
                <p style="position: absolute; top: 255px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;">
                Type of House: ${TypeofHouse}
                </p>   
                <p style="position: absolute; top: 220px; left: 320px; color:#252525; font-size: 12px; font-weight: bold;">
                Name of House: ${NameofHouse}
                </p>   
                <p style="position: absolute; top: 255px; left: 320px; color:#252525; font-size: 12px; font-weight: bold;">
                Description of House: ${DescriptionofHouse}
                </p>   
                
                <p style="position: absolute; top: 285px; left: 55px; color:#252525; font-size: 12px; font-weight: bold;">
                Date of month,year to determine the house number: ${DescriptionofHouse}
                </p>   
                
                <p style="position: absolute; top: 325px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;">
                Registrar
                </p>   
                
                <p style="position: absolute; top: 350px; left: 80%; color:#252525; font-size: 12px; font-weight: bold; text-align: right; transform: translateX(-100%);width: 95%;"">
                Signed:
                &nbsp;&nbsp;&nbsp;&nbsp;
                ${Signed}
                </p>   
                
                
                <p style="position: absolute; top: 458px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;">
                Book No. 1
                </p>   
                <p style="position: absolute; top: 458px; left: 140px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Particulars of Persons in the House Code No : ${HouseCodeNo1}
                </p>   
                
                <p style="position: absolute; top: 458px; left: 500px; color:#252525; font-size: 12px; font-weight: bold;">
                Book No. ${BookNo}
                </p>     
                
                <p style="position: absolute; top: 490px; left: 70px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Name: ${Name}
                </p>   
                <p style="position: absolute; top: 530px; left: 70px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Identification No.: ${Identification}
                </p>   
                <p style="position: absolute; top: 570px; left: 70px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Name of Biological Mother: ${Mother}
                </p>  
                <p style="position: absolute; top: 600px; left: 70px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Name of Biological Father: ${Father}
                </p>  
                
                <p style="position: absolute; top: 490px; left: 320px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Nationality: ${Nationality}
                </p>   
                <p style="position: absolute; top: 530px; left: 310px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Status: ${Status}
                </p>   
                <p style="position: absolute; top: 570px; left: 300px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                ${Identification1}
                </p>  
                <p style="position: absolute; top: 600px; left: 300px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                ${Identification2}
                </p>  
                
                <p style="position: absolute; top: 490px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Sex: ${Sex}
                </p>   
                <p style="position: absolute; top: 530px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Date of Birth: ${Dateofbirth}
                </p>   
                <p style="position: absolute; top: 570px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Nationality:${Nationality1}
                </p>  
                <p style="position: absolute; top: 600px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                Nationality:${Nationality2}
                </p>  
                
                
                <p style="position: absolute; top: 630px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                * Transferred from: ${TransferredFrom}
                </p>  
                
                <p style="position: absolute; top: 655px; left: 450px; color:#252525; font-size: 12px; font-weight: bold;">
                Registrar
                </p>   
                
                <p style="position: absolute; top: 680px; left: 80%; color:#252525; font-size: 12px; font-weight: bold;  text-align: right; transform: translateX(-100%);width: 95%;">
                Signed:
                &nbsp;&nbsp;&nbsp;&nbsp;
                ${Signed1}
                </p> 
                
                <p style="position: absolute; top: 730px; left: 60px; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px;">
                ** Transferred to
                </p>  
                
                <p style="position: absolute; top: 800px; left: 70%; color:#252525; font-size: 12px; font-weight: bold;letter-spacing: -0.3px; text-align: center; transform: translateX(-50%);">
                Certified Correct Translation
                <br>
                <br>
                (${certifiedcorrecttranslation})
                </p>   
                
             </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
