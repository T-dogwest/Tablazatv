import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(readonly db:PrismaService){}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.db.user.create({
        data: createUserDto,
      });
      return newUser; 
    } catch (error) {
      throw new NotFoundException('nem lehet létrehozni a felhasználót'); 
    }
  }

  async findAll() {
    try {
      const users = await this.db.user.findMany();
      return users; 
    } catch (error) {
      throw new NotFoundException('nem talákható felhasználó'); 
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.db.user.findUnique({
        where: { id },
      });
      return user ? `a keresett user ${user.name} ` : 'User not found';
    } catch (error) {
      throw new NotFoundException(`Nem található user id ${id}`); 
      
    }
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.db.user.update({
        where: { id },
        data: updateUserDto,
      });
      return `a ${id} felhasználó frissítve`; 
    } catch (error) {
      throw new NotFoundException(`nem lehet frissíteni a ${id}`); 
    }
  }

 async remove(id: number) {
    try {
      await this.db.user.delete({
        where: { id },
      });
      return `a ${id} felhasználó törölve`; 
    } catch (error) {
      throw new NotFoundException(`nem lehet törölni a ${id} felhasználót`); 
    }}
}
