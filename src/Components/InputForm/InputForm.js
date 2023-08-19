
import React, { useState } from 'react';
import Project from '../Project/Project';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Result from '../Result/Result';

const InputForm = () => {
      const [formData, setFormData] = useState({
            projectName: '',
            projectDescription: '',
            client: '',
            contractor: '',
      });

      const [maxMinValues, setMaxMinValues] = useState({
            maxX: 0,
            minX: 0,
            maxY: 0,
            minY: 0,
            maxZ: 0,
            minZ: 0,
      });
      const [showResultPage, setShowResultPage] = useState(false);

      const showResult = () => {
            setShowResultPage(true);
      };
      const onInputChange = (e) => {
            const { name, value } = e.target;


            if (name.startsWith('max') || name.startsWith('min')) {
                  setMaxMinValues((prevValues) => ({
                        ...prevValues,
                        [name]: parseFloat(value),
                  }));
            } else {
                  setFormData((prevData) => ({
                        ...prevData,
                        [name]: value,
                  }));
            }
      };



      const onFileUpload = (e) => {
            const file = e.target.files[0];
            if (file) {
                  const reader = new FileReader();
                  reader.onload = handleFileRead;
                  reader.readAsText(file);
            }
      };

      const handleFileRead = (e) => {
            const content = e.target.result;
            const lines = content.split('\n');

            // Assuming the first line contains headers: KP, X, Y, Z
            const header = lines[0].split(',');

            // Find the index of X, Y, and Z columns
            const xIndex = header.indexOf('X');
            const yIndex = header.indexOf('Y');
            const zIndex = header.indexOf('Z');

            // Initialize max and min values
            let maxX = -Infinity, minX = Infinity,
                  maxY = -Infinity, minY = Infinity,
                  maxZ = -Infinity, minZ = Infinity;

            // Loop through the lines to find max and min values
            for (let i = 1; i < lines.length; i++) {
                  const values = lines[i].split(',');
                  const x = parseFloat(values[xIndex]);
                  const y = parseFloat(values[yIndex]);
                  const z = parseFloat(values[zIndex]);

                  if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
                        maxX = Math.max(maxX, x);
                        minX = Math.min(minX, x);
                        maxY = Math.max(maxY, y);
                        minY = Math.min(minY, y);
                        maxZ = Math.max(maxZ, z);
                        minZ = Math.min(minZ, z);
                  }
            }

            setMaxMinValues({
                  maxX: maxX,
                  minX: minX,
                  maxY: maxY,
                  minY: minY,
                  maxZ: maxZ,
                  minZ: minZ,
            });
      };


      const printAsPDF = () => {
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Project Summary</title></head><body>');
            printWindow.document.write(`<h2>Project Summary</h2>`);
            printWindow.document.write(`<p>Project Name: ${formData.projectName}</p>`);
            console.log("formData", formData)
            printWindow.document.write(`<p>Project Name: ${formData.projectDescription}</p>`);
            printWindow.document.write(`<p>Project Name: ${formData.client}</p>`);
            printWindow.document.write(`<p>Project Name: ${formData.contractor}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.maxX}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.minX}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.maxY}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.minY}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.maxZ}</p>`);
            printWindow.document.write(`<p>Project Name: ${maxMinValues.minZ}</p>`);

            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
      };
      return (
            <div>

                  <div className='d-flex justify-content-center'>
                        <div className='m-5' >
                              <button className='btn btn-dark' onClick={printAsPDF}>Print PDF</button>
                        </div>
                        <div>
                              <Project formData={formData} onInputChange={onInputChange} onFileUpload={onFileUpload} />
                        </div>
                        <div>
                              <ProjectInfo formData={formData} maxMinValues={maxMinValues} onInputChange={onInputChange} />
                        </div>
                        <div className='ms-5 mt-5 pt-3'>
                              <button className='btn btn-info ' onClick={showResult}>Result</button>
                              {showResultPage && <Result formData={formData} maxMinValues={maxMinValues} />}
                        </div>

                  </div>



            </div>
      );


};

export default InputForm;
