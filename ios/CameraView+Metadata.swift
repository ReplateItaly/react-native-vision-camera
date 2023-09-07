import Foundation
import UIKit
import AVFoundation

extension CameraView: AVCapturePhotoFileDataRepresentationCustomizer {

    // create GPS metadata properties
    func createLocationMetadata() -> NSMutableDictionary? {
        if let location = locationManager.location {
            let gpsDictionary = NSMutableDictionary()
            var latitude = location.coordinate.latitude
            var longitude = location.coordinate.longitude
            var altitude = location.altitude
            var latitudeRef = "N"
            var longitudeRef = "E"
            var altitudeRef = 0

            if latitude < 0.0 {
                latitude = -latitude
                latitudeRef = "S"
            }

            if longitude < 0.0 {
                longitude = -longitude
                longitudeRef = "W"
            }

            if altitude < 0.0 {
                altitude = -altitude
                altitudeRef = 1
            }

            let formatter = DateFormatter()
            formatter.dateFormat = "yyyy:MM:dd"
            gpsDictionary[kCGImagePropertyGPSDateStamp] = formatter.string(from:location.timestamp)
            formatter.dateFormat = "HH:mm:ss"
            gpsDictionary[kCGImagePropertyGPSTimeStamp] = formatter.string(from:location.timestamp)
            gpsDictionary[kCGImagePropertyGPSLatitudeRef] = latitudeRef
            gpsDictionary[kCGImagePropertyGPSLatitude] = latitude
            gpsDictionary[kCGImagePropertyGPSLongitudeRef] = longitudeRef
            gpsDictionary[kCGImagePropertyGPSLongitude] = longitude
            gpsDictionary[kCGImagePropertyGPSDOP] = location.horizontalAccuracy
            gpsDictionary[kCGImagePropertyGPSAltitudeRef] = altitudeRef
            gpsDictionary[kCGImagePropertyGPSAltitude] = altitude

            if let heading = locationManager.heading {
                gpsDictionary[kCGImagePropertyGPSImgDirectionRef] = "T"
                gpsDictionary[kCGImagePropertyGPSImgDirection] = heading.trueHeading
            }

            return gpsDictionary;
        }
        return nil
    }

    func getFileRepresentationWithLocationData(photo : AVCapturePhoto) -> Data {
        // get image metadata
        var properties = photo.metadata

        // add gps data to metadata
        if let gpsDictionary = createLocationMetadata() {
            properties[kCGImagePropertyGPSDictionary as String] = gpsDictionary
        }

        // create new file representation with edited metadata

        return photo.fileDataRepresentation(with: self) ?? Data()
    }

    func replacementMetadata(for photo: AVCapturePhoto) -> [String : Any]? {
        var properties = photo.metadata

        // add gps data to metadata
        if let gpsDictionary = createLocationMetadata() {
            properties[kCGImagePropertyGPSDictionary as String] = gpsDictionary
        }
        return properties
    }
}