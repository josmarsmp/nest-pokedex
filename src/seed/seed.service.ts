import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeapiResponse } from './interfaces/pokeapi-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly _pokemonModel: Model<Pokemon>
  ) {}

  async executeSeed() {

    await this._pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon?limit=1279');
    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach( ({ name, url} ) => {

      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2 ];

      pokemonToInsert.push( { name, no } );

    });

    await this._pokemonModel.insertMany( pokemonToInsert );
    
    return 'Seed executed succesfully'
  }

}
