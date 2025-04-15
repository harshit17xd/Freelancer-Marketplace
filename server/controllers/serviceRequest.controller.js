import { ServiceRequest } from '../models/serviceRequest.model.js';

export const createServiceRequest = async (req, res) => {
  try {
    const { serviceDetails } = req.body;
    const userId = req.user.id; // Assuming user is authenticated and req.user is set

    const newRequest = {
      userId,
      serviceDetails,
      createdAt: new Date(),
    };

    // Save the request to the database
    const savedRequest = await ServiceRequest.create(newRequest);

    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Error creating service request' });
  }
};

export const getServiceRequests = async (req, res) => {
  try {
    // Fetch service requests from the database
    const requests = await ServiceRequest.find().populate('userId', 'name');

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching service requests' });
  }
}; 