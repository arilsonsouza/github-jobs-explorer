import React from 'react';

export interface jobProperties {
    id: string,
    type: string,
    url: string,
    created_at: string,
    company: string,
    company_url: string,
    location: string,
    title: string,
    description: string,
    company_logo: string
}

export interface apiParams {
    description?: string,
    location?: string,
    lat?: string,
    long?: string,
    full_time?: string
}

export interface actionProperties {
    type?: string,
    payload?: any
}

export interface jobInitialState {
    jobs: jobProperties[],
    job?: jobProperties
}

export interface rootState {
    app: any,
    job: any,
    filter: any
}
export interface filterInitialState {
    isFullTime: boolean,
    selectedLocation?: string,
    locations: string[]
}