import React from 'react';

const Result = ({ formData, maxMinValues }) => {
      return (
            <div className='mt-5 text-white'>

                  <table >
                        <tbody>
                              <tr>
                                    <td>Project Name:</td>
                                    <td>{formData.projectName}</td>
                              </tr>
                              <tr>
                                    <td>Project Description:</td>
                                    <td>{formData.projectDescription}</td>
                              </tr>
                              <tr>
                                    <td>Client:</td>
                                    <td>{formData.client}</td>
                              </tr>
                              <tr>
                                    <td>Contractor:</td>
                                    <td>{formData.contractor}</td>
                              </tr>
                              <tr>
                                    <td>Max X:</td>
                                    <td>{maxMinValues.maxX}</td>
                              </tr>
                              <tr>
                                    <td>Min X:</td>
                                    <td>{maxMinValues.minX}</td>
                              </tr>
                              <tr>
                                    <td>Max Y:</td>
                                    <td>{maxMinValues.maxY}</td>
                              </tr>
                              <tr>
                                    <td>Min Y:</td>
                                    <td>{maxMinValues.minY}</td>
                              </tr>
                              <tr>
                                    <td>Max Z:</td>
                                    <td>{maxMinValues.maxZ}</td>
                              </tr>
                              <tr>
                                    <td>Min Z:</td>
                                    <td>{maxMinValues.minZ}</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      );
};

export default Result;
