'use server';
/**
 * @fileOverview An AI-powered tool that analyzes user inputs regarding property details
 * and location to recommend specific solar panel installation configurations and
 * estimated energy output.
 *
 * - recommendSolarConfiguration - A function that handles the solar configuration recommendation process.
 * - SolarConfigInput - The input type for the recommendSolarConfiguration function.
 * - SolarConfigOutput - The return type for the recommendSolarConfiguration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolarConfigInputSchema = z.object({
  roofAreaSqMeters: z
    .number()
    .positive()
    .describe('The available roof area in square meters.'),
  locationCity: z
    .string()
    .describe('The city where the property is located, for sunlight data estimation.'),
  averageMonthlyElectricityBillUSD: z
    .number()
    .positive()
    .describe('The average monthly electricity bill in INR, to estimate energy needs.'),
  propertyType: z
    .enum(['residential', 'commercial'])
    .describe('Type of property: residential or commercial.'),
});
export type SolarConfigInput = z.infer<typeof SolarConfigInputSchema>;

const SolarConfigOutputSchema = z.object({
  recommendations: z
    .array(
      z.object({
        configurationName: z
          .string()
          .describe(
            'A descriptive name for the recommended configuration (e.g., "Basic Residential", "Optimized Commercial").'
          ),
        panelCount: z
          .number()
          .int()
          .positive()
          .describe('The estimated number of solar panels for this configuration.'),
        totalCapacityKw: z
          .number()
          .positive()
          .describe('The total estimated power capacity of the system in kilowatts (kW).'),
        estimatedEnergyOutputKWhMonth: z
          .number()
          .positive()
          .describe('The estimated monthly energy output in kilowatt-hours (kWh).'),
        estimatedSavingsPerMonthUSD: z
          .number()
          .describe('The estimated monthly savings in INR based on current electricity costs.'),
        notes: z
          .string()
          .describe('Additional notes or considerations for this configuration.'),
      })
    )
    .describe('An array of recommended solar panel configurations.'),
  overallEstimatedPaybackPeriodYears: z
    .number()
    .positive()
    .describe(
      'The overall estimated payback period for the investment in years, considering average savings and installation costs.'
    ),
  disclaimer: z
    .string()
    .describe('A disclaimer regarding the estimates provided.'),
});
export type SolarConfigOutput = z.infer<typeof SolarConfigOutputSchema>;

export async function recommendSolarConfiguration(
  input: SolarConfigInput
): Promise<SolarConfigOutput> {
  return solarConfigurationRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solarConfigurationRecommendationPrompt',
  input: {schema: SolarConfigInputSchema},
  output: {schema: SolarConfigOutputSchema},
  prompt: `You are an expert solar energy consultant for SHIV MAHALUXMI SOLAR ENERGY. Your goal is to provide tailored solar panel installation recommendations based on user input, including estimated energy output and savings. Use realistic assumptions for panel efficiency, average sunlight hours for the given location, and typical installation costs in India.

Input Details:
Property Type: {{{propertyType}}}
Roof Area: {{{roofAreaSqMeters}}} square meters
Location: {{{locationCity}}}
Average Monthly Electricity Bill: ₹{{{averageMonthlyElectricityBillUSD}}}

Based on these details, please provide 1-3 distinct solar panel configuration recommendations. For each recommendation, include:
- A descriptive configuration name (e.g., "Standard Residential System", "High-Efficiency Commercial Array").
- The estimated number of solar panels (assuming 350-400W per panel and typical dimensions fitting the roof area).
- The total estimated power capacity of the system in kilowatts (kW).
- The estimated monthly energy output in kilowatt-hours (kWh), considering the location's average sunlight hours (e.g., 4-6 peak sun hours per day depending on location).
- The estimated monthly savings in INR, based on the provided average monthly electricity bill and the generated energy.
- Any important notes or considerations specific to that configuration.

Finally, provide an overall estimated payback period for the solar investment in years, considering average installation costs in India and the calculated savings. Also, include a clear disclaimer stating that all figures are estimates and can vary based on actual conditions, system specifics, and changing energy prices.
`,
});

const solarConfigurationRecommendationFlow = ai.defineFlow(
  {
    name: 'solarConfigurationRecommendationFlow',
    inputSchema: SolarConfigInputSchema,
    outputSchema: SolarConfigOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
