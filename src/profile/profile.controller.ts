import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { SignUpDto } from './signup.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.profileService.getProfile(id);
  }

  @Patch()
  async makeupAdmin() {
    return this.profileService.makeupAdmin();
  }

  @Post()
  async signUp(@Body() signupDto: SignUpDto) {
    return this.profileService.singup(signupDto);
  }
}
