
import React, { useState } from 'react';
import Project from '../Project/Project';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Result from '../Result/Result';
import { Chart } from 'chart.js';
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
      const [chartData, setChartData] = useState([]);
      const [kpValues, setkpValues] = useState([]);
      const [xValues, setxValues] = useState([]);
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

            // Find the index of KP and X ,Y , Z columns
            const kpIndex = header.indexOf('KP');
            const xIndex = header.indexOf('X');
            const yIndex = header.indexOf('Y');
            const zIndex = header.indexOf('Z');

            // Initialize chart data array
            const newChartData = [];

            // Loop through the lines to collect chart data
            for (let i = 1; i < lines.length; i++) {
                  const values = lines[i].split(',');
                  const kp = parseFloat(values[kpIndex]);
                  const x = parseFloat(values[xIndex]);
                  const y = parseFloat(values[yIndex]);
                  const z = parseFloat(values[zIndex]);

                  if (!isNaN(kp) && !isNaN(x)) {
                        newChartData.push({ kp, x, y, z });
                  }
            }

            setChartData(newChartData);

            // Calculation of max and min values for KP and X ,Y, Z
            const kpValues = newChartData.map((point) => point.kp);
            const xValues = newChartData.map((point) => point.x);
            const yValues = newChartData.map((point) => point.y);
            const zValues = newChartData.map((point) => point.z);
            setkpValues(kpValues);
            setxValues(xValues);
            console.log("kpValues", kpValues)
            console.log("xValues", xValues)
            new Chart("myChart", {
                  type: "line",
                  data: {
                        labels: kpValues,
                        datasets: [
                              {
                                    label: "X Values",
                                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                                    borderColor: "rgba(0, 0, 255, 1.0)",
                                    data: xValues,
                              },
                        ],
                  },
                  options: {},
            });

            const maxKP = Math.max(...kpValues);
            const minKP = Math.min(...kpValues);
            const maxX = Math.max(...xValues);
            const minX = Math.min(...xValues);
            const maxY = Math.max(...yValues);
            const minY = Math.min(...yValues);
            const maxZ = Math.max(...zValues);
            const minZ = Math.min(...zValues);



            setMaxMinValues({
                  maxKP: maxKP,
                  minKP: minKP,
                  maxX: maxX,
                  minX: minX,
                  maxY: maxY,
                  minY: minY,
                  maxZ: maxZ,
                  minZ: minZ
            });
      };
      console.log("chartData", chartData)


      const printAsPDF = () => {
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Project Summary</title></head><body>');
            printWindow.document.write(`<h2>Project Summary</h2>`);
            printWindow.document.write(`<p>Project Name: ${formData.projectName}</p>`);
            console.log("formData", formData)
            printWindow.document.write(`<p>Project Description:: ${formData.projectDescription}</p>`);
            printWindow.document.write(`<p>Client:: ${formData.client}</p>`);
            printWindow.document.write(`<p>Contractor:: ${formData.contractor}</p>`);
            printWindow.document.write(`<p>Max X: ${maxMinValues.maxX}</p>`);
            printWindow.document.write(`<p>Min X: ${maxMinValues.minX}</p>`);
            printWindow.document.write(`<p>Max Y: ${maxMinValues.maxY}</p>`);
            printWindow.document.write(`<p>Min Y: ${maxMinValues.minY}</p>`);
            printWindow.document.write(`<p>Max Ze: ${maxMinValues.maxZ}</p>`);
            printWindow.document.write(`<p>Min Z: ${maxMinValues.minZ}</p>`);

            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
      };
      return (
            <div>

                  <div className='d-flex justify-content-center'>
                        <div>
                              <div className='m-5' >
                                    <button className='btn btn-dark' onClick={printAsPDF}>Print PDF</button>
                              </div>
                              <div style={{ backgroundColor: 'beige' }} className='me-5'>
                                    <h6>Chart</h6>
                                    <canvas id="myChart" style={{ width: "100%", maxWidth: "800px" }}></canvas>
                              </div>
                        </div>


                        <div >
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
