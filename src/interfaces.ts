interface ICloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  miss_distance: {
    astronomical: number;
    lunar: number;
    kilometers: number;
    miles: number;
  };
  orbiting_body: string;
  relative_velocity: {
    kilometers_per_second: number;
    kilometers_per_hour: number;
    miles_per_hour: number;
  };
}

export interface INeo {
  absolute_magnitude_h: number;
  close_approach_data: ICloseApproachData[];
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}

export interface INeoList {
  [key: string]: INeo[];
}

export interface INeoResponse {
  element_count: number;
  links: {
    next: string;
    prev: string;
    self: string;
  };
  near_earth_objects: INeoList;
}
