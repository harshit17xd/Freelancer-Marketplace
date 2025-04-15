import express from 'express';
import { User } from '../models/user.model.js';
import { SkillExchangeRequest } from '../models/skillExchange.model.js';

export const createSkillExchangeRequest = async (req, res) => {
  try {
    console.log('Request received:', req.body);
    const { skillNeeded, skillOffered, description } = req.body;
    const userId = req.user.id; // Assuming user is authenticated and req.user is set

    const newRequest = {
      userId,
      skillNeeded,
      skillOffered,
      description,
      createdAt: new Date(),
    };

    // Save the request to the database
    const savedRequest = await SkillExchangeRequest.create(newRequest);
    console.log('Request saved:', savedRequest);

    res.status(201).json(savedRequest);
  } catch (error) {
    console.error('Error creating skill exchange request:', error);
    res.status(500).json({ error: 'Error creating skill exchange request' });
  }
};

export const getSkillExchangeRequests = async (req, res) => {
  try {
    // Fetch skill exchange requests from the database
    const requests = await SkillExchangeRequest.find().populate('userId', 'name');

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching skill exchange requests' });
  }
}; 