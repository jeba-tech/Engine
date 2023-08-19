import React from 'react';

const ProjectInfo = ({ formData, maxMinValues, onInputChange }) => {
      return (
            <div className=' d-flex justify-content-center'>
                  <div className='ms-5 ps-5'>
                        <h2 className='text-white'>Project Information</h2>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Project Name:</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" value={formData.projectName} readOnly
                                    placeholder="Project Name" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Project Description</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" value={formData.projectDescription} readOnly
                                    placeholder="Project Description" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Client:</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" value={formData.client} readOnly
                                    placeholder="Client" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Contractor:</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" value={formData.contractor} readOnly
                                    placeholder="Contractor" />
                        </div>



                  </div>
                  <div className='ms-5 mt-5'>

                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Max X:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="maxX"
                                    value={maxMinValues.maxX}
                                    onChange={onInputChange}
                                    placeholder="Max X value" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Min X:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="minX"
                                    value={maxMinValues.minX}
                                    onChange={onInputChange}
                                    placeholder="Min X value" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Max Y:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="maxY"
                                    value={maxMinValues.maxY}
                                    onChange={onInputChange}
                                    placeholder="Max Y value" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Min Y:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="minY"
                                    value={maxMinValues.minY}
                                    onChange={onInputChange}
                                    placeholder="Min Y value" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Max Z:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="maxZ"
                                    value={maxMinValues.maxZ}
                                    onChange={onInputChange}
                                    placeholder="Max Z value" />
                        </div>
                        <div class="mb-5 pb-5 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Min Z:</label>
                              <input class="form-control" id="formGroupExampleInput" type="number"
                                    name="minZ"
                                    value={maxMinValues.minZ}
                                    onChange={onInputChange}
                                    placeholder="Min Z value" />
                        </div>
                  </div>
            </div>

      );
};

export default ProjectInfo;
