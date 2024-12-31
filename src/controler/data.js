const Course = require('../model/data');

// Create a new course
createCourse = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const course = new Course({
            title,
            description,
            imageUrl,
            price: parseFloat(price)
        });

        await course.save();
        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all courses
getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {createCourse,getAllCourses,getCourseById,updateCourse,deleteCourse}