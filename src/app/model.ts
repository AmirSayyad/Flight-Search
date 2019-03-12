
export class Routes {
    airline: string;	//2-letter (IATA) or 3-letter (ICAO) code of the airline.
    airline_id: number; // Unique OpenFlights identifier for airline (see Airline).
    source_airport: string;	//3-letter (IATA) or 4-letter (ICAO) code of the source airport.
    source_airport_id: number;//	Unique OpenFlights identifier for source airport (see Airport)
    source_airport_code: string;
    destination_airport: string;	//3-letter (IATA) or 4-letter (ICAO) code of the destination airport.
    destination_airport_id: number; // Unique OpenFlights identifier for destination airport (see Airport)
    destination_airport_code: string;
    price: number;
}

export class Flight {
    flight_number: string;
    capacity: number;
    rating: number;
}

export class Airport {
    airport: string;
    airport_id: number;
    airport_code: string;
}

export class SearchForm {
    source: Airport;
    destination: Airport;
    departure_date: string;
    return_date: string;
    no_of_passengers: number;
}
