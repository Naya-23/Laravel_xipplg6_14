<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Tampilkan daftar semua siswa (Read)
     */
    public function index()
    {
        $students = Student::all();
        return view('admin.student.index', compact('students'));
    }


    /**
     * Tampilkan form tambah siswa (Create)
     */
    public function create()
    {
    return view('admin.student.create');
    }

    /**
     * Simpan data siswa baru ke database (Store)
     */
   public function store(Request $request)
    {
        $request->validate([
            'nis' => 'required|unique:students',
            'nama_lengkap' => 'required',
            'jenis_kelamin' => 'required',
            'nisn' => 'required|unique:students',
        ]);

        Student::create($request->all());
        return redirect()->route('admin.students.index')->with('success', 'Data berhasil disimpan!');
    }


        

    /**
     * Tampilkan detail siswa berdasarkan ID (Show)
     */
public function show(Student $student)
{
    return view('admin.student.show', compact('student'));
}

    /**
     * Tampilkan form edit data siswa (Edit)
     */
   public function edit(Student $student)
    {
        return view('admin.student.edit', compact('student'));
    }

    /**
     * Update data siswa (Update)
     */
    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'nis' => 'required',
            'nama_lengkap' => 'required',
            'jenis_kelamin' => 'required',
            'nisn' => 'required',
        ]);

        $student->update($validated);
        return redirect()->route('admin.students.index')->with('success', 'Data siswa berhasil diperbarui');
    }


    /**
     * Hapus data siswa (Delete)
     */
    public function destroy(Student $student)
    {
        
        $student->delete();
        return redirect()->route('admin.students.index')->with('success', 'Data siswa berhasil dihapus');
    }

}
